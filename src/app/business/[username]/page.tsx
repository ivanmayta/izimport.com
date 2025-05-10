export default async function BusinessPage({
    params,
}: {
    params: { username: string }
}) {
    const username = params.username

    return (
        <div>
            <h1>Business Page</h1>
            {JSON.stringify(params)}
            <p>This is the business page for {username}.</p>
        </div>
    )
}
