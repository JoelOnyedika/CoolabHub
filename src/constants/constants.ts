import {Search, Clock3, Settings, PlusCircle, Pin, Scissors, BookText, FileSignature, BookOpenText, FileText, Trash2, SlidersHorizontal, Bell, ArrowUpCircle, User2 } from 'lucide-react'

export const sidebarTabsOne = [
    {id: 1, name: "Search", icon:Search},
    {id: 2, name: "Update", icon:Clock3},
    {id: 3, name: "Settings", icon:Settings},
    {id: 4, name: "New page", icon:PlusCircle},
]

export const sidebarTabsTwo = [
{id: 1, name: "Getting Started", icon: FileText},
{id: 2, name: "Quick Note", icon: Pin},
{id: 3, name: "Tasking", icon: Scissors},
{id: 4, name: "Journals", icon: BookText},
{id: 5, name: "Reading List", icon: BookOpenText},
]

export const sidebarTabsSubmenu = [
    {id: 1, name: "Rename", icon: FileSignature},
    {id: 2, name: "Delete", icon: Trash2}
]

export const accountSettingsMenu = [
    {id: 1, name: "My Account", icon: User2},
    {id: 2, name: "My Settings", icon: SlidersHorizontal},
    {id: 3, name: "My Notifications", icon: Bell},
]

export const workspaceSettingsMenu = [
    {id: 4, name: "Settings", icon: Settings},
    {id: 5, name: "Upgrade", icon: ArrowUpCircle},
]