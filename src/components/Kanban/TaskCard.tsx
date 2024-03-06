import { TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { KanbanTaskCardProps } from '@/types/types';

function TaskCard({ task, deleteTask, updateTask }: KanbanTaskCardProps) {
	const [mouseIsOver, setMouseIsOver] = useState(false);
	const [editMode, setEditMode] = useState(false);

	const { setNodeRef, attributes, listeners, transform, transition } =
		useSortable({
			id: task.id,
			data: {
				type: 'Task',
				task,
			},
			disabled: editMode,
		});

	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
	};

	const toggleEditMode = () => setEditMode((prev) => !prev);

	if (editMode) {
		return (
			<div
				ref={setNodeRef}
				style={style}
				{...attributes}
				{...listeners}
				className=' p-2.5 h-[100px] max-h-[100px] items-center flex text-left rounded-xl cursor-grab relative'
			>
				<textarea
					className='
          h-[90%]
          w-full resize-none border-none rounded bg-transparent text-white focus:outline-none
          '
					value={task.content}
					autoFocus={editMode}
					placeholder='Task content here'
					onBlur={toggleEditMode}
					onKeyDown={(e) => {
						if (e.key === 'Enter' && e.shiftKey) {
							toggleEditMode();
						}
					}}
					onChange={(e) => updateTask(task.id, e.target.value)}
				/>
			</div>
		);
	}

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
			onClick={toggleEditMode}
			className='bg-zinc-900 p-2.5 h-[50px] min-h-[50px] items-center flex text-left rounded-xl cursor-grab relative task'
			onMouseEnter={() => {
				setMouseIsOver(true);
			}}
			onMouseLeave={() => {
				setMouseIsOver(false);
			}}
		>
			<p className='my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap'>
				{task.content}
			</p>

			{mouseIsOver && (
				<button
					onClick={() => {
						deleteTask(task.id);
					}}
					className='stroke-white absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded opacity-100'
				>
					<TrashIcon className='w-5 h-5 hover:stroke-red-500' />
				</button>
			)}
		</div>
	);
}

export default TaskCard;
