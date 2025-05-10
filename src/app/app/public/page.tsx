// import { useUser } from "@clerk/nextjs"
import { inserProfile, updateProfile } from "@/lib/actions"
import { fetchProfile } from "@/lib/fetchers"
//import { auth } from "@clerk/nextjs/server"
export default async function Hello() {
    // const { user } = useUser()
    const userId = "user_2weeQ3DUfEbqRUioPce45QFdkpC"
    //const { userId: id } = await auth()
    const isertProfileWithId = inserProfile.bind(null, userId)
    const updateProfileWithId = updateProfile.bind(null, userId)
    const profiles = await fetchProfile(userId)
    return (
        <div>
            <h1>Create</h1>
            <form
                className="flex flex-col max-w-sm"
                action={isertProfileWithId}
            >
                <label>Username</label>
                <input className="border" type="text" name="username" />
                <button type="submit">Submit</button>
            </form>
            <hr />
            <h1>Update</h1>
            <form
                className="flex flex-col max-w-sm"
                action={updateProfileWithId}
            >
                <label>Username</label>
                <input className="border" type="text" name="username" />
                <button type="submit">Submit</button>
            </form>
            <hr />
            <p>{JSON.stringify(profiles)}</p>
        </div>
    )
}
