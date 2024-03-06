import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useMemo, useState } from 'react';
import {
	DndContext,
	DragEndEvent,
	DragOverlay,
	DragStartEvent,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';
import { defaultCols, defaultTasks } from '../data/data';
import { KanbanColumn, Id, KanbanTask } from '../types/types';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import ColumnContainer from '@/components/Kanban/ColumnContainer';
import TaskCard from '@/components/Kanban/TaskCard';

const pathSegments = [
	{ name: 'Home', href: '/', current: false },
	{ name: 'Kanban', href: '/kanban', current: true },
];

const KanbanHomePage = () => {
	const [columns, setColumns] = useState<KanbanColumn[]>(defaultCols);
	const [isClient, setIsClient] = useState(false);
	const columnsId = useMemo(
		() => columns.map((column) => column.id),
		[columns]
	);
	const [activeColumn, setActiveColumn] = useState<KanbanColumn | null>(null);
	const [tasks, setTasks] = useState<KanbanTask[]>(defaultTasks);
	const [activeTask, setActiveTask] = useState<KanbanTask | null>(null);

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 5,
			},
		})
	);

	const generateId = () => {
		return uuidv4();
	};

	const createNewColumn = () => {
		const columnToAdd: KanbanColumn = {
			id: generateId(),
			title: `Column ${columns.length + 1}`,
		};
		setColumns([...columns, columnToAdd]);
	};

	const deleteColumn = (id: Id) => {
		const filteredColumns = columns.filter((column) => column.id !== id);
		setColumns(filteredColumns);
	};

	const onDragStart = (event: DragStartEvent) => {
		if (event.active.data.current?.type === 'Column') {
			setActiveColumn(event.active.data.current.column);
			return;
		}

		if (event.active.data.current?.type === 'Task') {
			setActiveTask(event.active.data.current.task);
			return;
		}
	};

	const onDragEnd = (event: DragEndEvent) => {
		setActiveColumn(null);
		setActiveTask(null);

		const { active, over } = event;
		if (!over) return;

		const activeId = active.id;
		const overId = over.id;

		if (activeId === overId) return;

		const isActiveAColumn = active.data.current?.type === 'Column';
		if (!isActiveAColumn) return;

		setColumns((columns) => {
			const activeColumnIndex = columns.findIndex((col) => col.id === activeId);

			const overColumnIndex = columns.findIndex((col) => col.id === overId);

			return arrayMove(columns, activeColumnIndex, overColumnIndex);
		});
	};

	const updateColumn = (id: Id, title: string) => {
		setColumns((prevColumns) =>
			prevColumns.map((column) =>
				column.id === id ? { ...column, title } : column
			)
		);
	};

	const updateTask = (id: Id, content: string) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) => (task.id === id ? { ...task, content } : task))
		);
	};

	const createTask = (columnId: Id) => {
		const newTask: KanbanTask = {
			id: generateId(),
			columnId,
			content: `Task ${tasks.length + 1}`,
		};

		setTasks([...tasks, newTask]);
	};

	const deleteTask = (id: Id) => {
		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
	};

	useEffect(() => {
		setIsClient(true);
	  }, []);

	return (
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white  font-bold'>
				Kanban
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<motion.div
				className='flex flex-col m-auto h-full w-full p-2'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
			>
				<DndContext
					sensors={sensors}
					onDragStart={onDragStart}
					onDragEnd={onDragEnd}
				>
					<div className='mb-4 items-center flex justify-center'>
						<button
							onClick={() => createNewColumn()}
							className='flex w-full justify-center items-center rounded-md bg-indigo-500 px3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 lg:w-96'
						>
							<PlusCircleIcon className='w-5 h-5 mr-2' />
							Add Column
						</button>
					</div>
					<div className='flex flex-grow justify-center flex-col lg:flex-row lg:flex-wrap gap-4 overflow-x-hidden overflow-y-auto'>
						<SortableContext items={columnsId}>
							{columns.map((column) => (
								<ColumnContainer
									key={column.id}
									column={column}
									deleteColumn={deleteColumn}
									updateColumn={updateColumn}
									createTask={createTask}
									deleteTask={deleteTask}
									updateTask={updateTask}
									tasks={tasks.filter((task) => task.columnId === column.id)}
								/>
							))}
						</SortableContext>
					</div>
					{isClient && createPortal(
						<DragOverlay>
							{activeColumn && (
								<ColumnContainer
									column={activeColumn}
									deleteColumn={deleteColumn}
									updateColumn={updateColumn}
									createTask={createTask}
									deleteTask={deleteTask}
									updateTask={updateTask}
									tasks={tasks.filter(
										(task) => task.columnId === activeColumn.id
									)}
								/>
							)}
							{activeTask && (
								<TaskCard
									task={activeTask}
									deleteTask={deleteTask}
									updateTask={updateTask}
								/>
							)}
						</DragOverlay>,
						document.body
					)}
				</DndContext>
			</motion.div>
		</MainLayout>
	);
};

export default KanbanHomePage;
