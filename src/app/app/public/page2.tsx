// import { redirect } from "next/navigation"
// // import { useUser } from "@clerk/nextjs"
// import { createProfile, updateProfile } from "@/lib/actions"
// import { auth } from "@clerk/nextjs/server"
// import { getProfile } from "@/lib/fetchers"
// export default async function Hello() {
//     // const { user } = useUser()
//     const { userId } = await auth()
//     if (!userId) {
//         return redirect("/sign-in")
//     }
//     const isertProfileWithId = createProfile.bind(null, userId)
//     const updateProfileWithId = updateProfile.bind(null, userId)
//     const profiles = await getProfile(userId)
//     return (
//         <div>
//             <h1>Create</h1>
//             <form
//                 className="flex flex-col max-w-sm"
//                 action={isertProfileWithId}
//             >
//                 <label>Username</label>
//                 <input className="border" type="text" name="username" />
//                 <button type="submit">Submit</button>
//             </form>
//             <hr />
//             <h1>Update</h1>
//             <form
//                 className="flex flex-col max-w-sm"
//                 action={updateProfileWithId}
//             >
//                 <label>Username</label>
//                 <input className="border" type="text" name="username" />
//                 <button type="submit">Submit</button>
//             </form>
//             <hr />
//             <p>{JSON.stringify(profiles)}</p>
//         </div>
//     )
// }
