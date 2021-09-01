import { Listbox, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { useState, Fragment } from 'react';
import { useTheme } from '../contexts/Theme';

export default function CustomListbox({
	label,
	list,
	getSelectedItemName,
	onChange,
	unitialSelection,
}) {
	const [selected, setSelected] = useState(unitialSelection);
	let { isDarkTheme } = useTheme();

	return (
		<Listbox
			as="div"
			value={selected}
			onChange={selected => {
				onChange(selected);
				setSelected(selected);
			}}
		>
			<Listbox.Label
				className={`${isDarkTheme ? 'text-white' : 'text-gray-900'} font-bold`}
			>
				{label}
			</Listbox.Label>
			<div className="relative mt-1">
				<Listbox.Button
					className={`${
						isDarkTheme
							? 'bg-gray-800 focus:bg-gray-700'
							: 'bg-gray-100 focus:bg-gray-50'
					} relative w-full py-2 pl-3 pr-10 text-left rounded-md cursor-pointer focus:outline-none`}
				>
					<span className="block truncate">
						{getSelectedItemName(selected)}
					</span>
					<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
						<Icon icon="heroicons-outline:chevron-down" />
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
					enter="transition ease-in duration-100"
					enterFrom="opacity-0"
					enterTo="opacity-100"
				>
					<Listbox.Options
						className={`${
							isDarkTheme
								? 'bg-gray-800 ring-gray-700'
								: 'bg-white ring-gray-200'
						} absolute w-full py-1 mt-1 overflow-auto rounded-md max-h-40 ring-1 focus:outline-none z-[1000]`}
					>
						{list.map((item, idx) => (
							<Listbox.Option
								key={idx}
								className={({ active }) =>
									`${
										active
											? isDarkTheme
												? 'bg-gray-700'
												: 'text-gray-900 bg-gray-100'
											: isDarkTheme
											? 'bg-gray-800'
											: 'text-gray-900'
									} cursor-pointer select-none relative py-2 pl-10 pr-4`
								}
								value={item}
							>
								{({ selected, active }) => (
									<>
										<span
											className={`${
												selected ? 'font-bold' : 'font-normal'
											} block truncate`}
										>
											{getSelectedItemName(item)}
										</span>
										{selected ? (
											<span
												className={`absolute inset-y-0 left-0 flex items-center pl-3`}
											>
												<Icon
													className="w-5 h-5"
													icon="heroicons-solid:check-circle"
												/>
											</span>
										) : null}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
}
