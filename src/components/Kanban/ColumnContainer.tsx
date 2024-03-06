import { TrashIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useMemo, useState } from 'react';
import TaskCard from './TaskCard';
import { KanbanContainerProps } from '../../types/types';

const ColumnContainer = (props: KanbanContainerProps) => {
	const {
		column,
		deleteColumn,
		updateColumn,
		createTask,
		tasks,
		deleteTask,
		updateTask,
	} = props;
	const [editMode, setEditMode] = useState(false);

	const tasksIds = useMemo(() => {
		return tasks.map((task) => task.id);
	}, [tasks]);

	const {
		setNodeRef,
		attributes,
		listeners,
		transform,
		transition,
		isDragging,
	} = useSortable({
		id: column.id,
		data: {
			type: 'Column',
			column,
		},
		disabled: editMode,
	});

	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
	};

	if (isDragging) {
		return (
			<div
				ref={setNodeRef}
				style={style}
				className='bg-myGray text-white w-full lg:w-96 h-96 rounded-md flex flex-col opacity-40 border-2 border-lightViolet '
			></div>
		);
	}

	return (
		<div
			ref={setNodeRef}
			style={style}
			className='bg-myPrimary text-white lg:w-96 h-96 rounded-md flex flex-col'
		>
			<div
				{...attributes}
				{...listeners}
				onClick={() => setEditMode(true)}
				className='bg-myIndigo text-md cursor-grab m-1  rounded-md
      rounded-b-none
      p-3
      font-bold
      flex
      items-center
      justify-between'
			>
				<div className='flex'>
					{!editMode && column.title}
					{editMode && (
						<input
							className='block w-full rounded-md border-0 text-white shadow-sm  h-6 focus:bg-white focus:text-black sm:text-sm sm:leading-6'
							value={column.title}
							onChange={(e) => updateColumn(column.id, e.target.value)}
							autoFocus={editMode}
							onBlur={() => {
								setEditMode(false);
							}}
							onKeyDown={(e) => {
								if (e.key !== 'Enter') return;
								setEditMode(false);
							}}
						/>
					)}
				</div>
				<button onClick={() => deleteColumn(column.id)}>
					<TrashIcon className='w-5 h-5 hover:stroke-red-500' />
				</button>
			</div>
			<div className='flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto scrollbar'>
				<SortableContext items={tasksIds}>
					{tasks.map((task) => (
						<TaskCard
							key={task.id}
							task={task}
							deleteTask={deleteTask}
							updateTask={updateTask}
						/>
					))}
				</SortableContext>
			</div>
			<div className='p-1'>
				<button
					className='bg-zinc-700 flex text-left items-center rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 w-full'
					onClick={() => {
						createTask(column.id);
					}}
				>
					<PlusCircleIcon className='w-5 h-5 mr-1' />
					Add task
				</button>
			</div>
		</div>
	);
};

export default ColumnContainer;
