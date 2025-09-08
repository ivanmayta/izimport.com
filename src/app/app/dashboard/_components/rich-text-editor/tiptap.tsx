"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import MenuBar from "./menu-bar"
import { useEffect, useState } from "react"

const Tiptap = ({
    name = "description",
    initialContent = "",
}: {
    name?: string
    initialContent?: string
}) => {
    const [html, setHtml] = useState("")

    const editor = useEditor({
        extensions: [StarterKit],
        content: initialContent,
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

    useEffect(() => {
        if (editor) {
            setHtml(editor.getHTML())
        }
    }, [editor])

    return (
        <div>
            <MenuBar editor={editor} />
            <EditorContent className="border tiptap" editor={editor} />
            <input type="hidden" name={name} value={html} />
        </div>
    )
}

export default Tiptap
