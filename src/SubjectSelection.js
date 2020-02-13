import React from 'react'

export default function SubjectSelection({
  setSelectedSubject,
  subjects = [],
}) {
  return (
    <select onChange={({ target }) => setSelectedSubject(target.value)}>
      <option key={subjects.length} value="">
        Choose a subject
      </option>
      <option key={subjects.length + 1} value="all">
        All
      </option>
      {subjects.map((subject, index) => (
        <option key={index} value={subject}>
          {subject}
        </option>
      ))}
    </select>
  )
}
