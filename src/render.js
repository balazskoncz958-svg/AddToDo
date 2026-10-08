import { createIcons,icons } from "lucide"


export function renderToDos(arr) {
    const liStr = arr.map(obj=>`
        <li class="justify-between inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-layer border border-layer-line text-layer-foreground -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
            <i onclick="handleDelete(${obj.id})"
             class="cursor-pointer text-red-500" data-lucide="trash"></i>
            <span class="${obj.done ? "line-through" : ""}">${obj.name}</span>
            <i onclick="handleUpdate(${obj.id})" class="cursor-pointer ${obj.done ? "text-green-500" : "text-gray-500"}" data-lucide="circle-chevron-down"></i>
        </li>
        `).join('')

        document.querySelector('.lista').innerHTML = liStr

        createIcons({icons})
}