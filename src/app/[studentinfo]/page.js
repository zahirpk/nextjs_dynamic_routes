

export default function StudentRecord({ params }) {
  return (
    <div className="flex h-screen justify-center">
      <div>
        <h1>Dynamic segment/routing</h1>
        <p>Student Information  of : {params.studentinfo}</p>
      </div>
    </div>
  )
}
