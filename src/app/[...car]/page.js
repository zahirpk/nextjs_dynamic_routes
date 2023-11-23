
"use client"
export default function CatchAllRoutes({ params }) {
    console.log(params)
    return (
        <div className="flex h-screen justify-center py-5">
            <div>
                <h1>  Catch all Segments or Routes</h1>
                 <p>Enroll Degree: {params.car[0]}</p>
                 <p>Enroll Course: {params.car[1]}</p>
                 <p>Enroll Course: {params.car[2]}</p>
            </div>

        </div>
    )
}
