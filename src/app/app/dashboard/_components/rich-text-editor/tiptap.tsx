"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import MenuBar from "./menu-bar"
import { useState } from "react"

const Tiptap = () => {
    const [html, setHtml] = useState("")

    const editor = useEditor({
        extensions: [StarterKit],
        content: "",
        // Don't render immediately on the server to avoid SSR issues
        immediatelyRender: false,
        onUpdate: ({ editor }) => {
            setHtml(editor.getHTML())
        },
        editorProps: {
            attributes: {
                class: "min-h-[156px] border rounded-md bg-slate-50 py-2 px-3",
            },
        },
    })

    return (
        <div>
            <MenuBar editor={editor} />
            <EditorContent className="border" name="content" editor={editor} />
            <input type="hidden" name="description" value={html} />
        </div>
    )
}

export default Tiptap
