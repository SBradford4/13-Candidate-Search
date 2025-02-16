import { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { Candidate } from "../interfaces/Candidate.interface";
import { Link } from "react-router-dom";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const savedCandidatesFromLocal = localStorage.getItem("savedCandidates");
    if (savedCandidatesFromLocal) {
      setSavedCandidates(JSON.parse(savedCandidatesFromLocal))
    }
  }, [])

  const handleRemoval = (id: number) => {
    const filteredCandidates = savedCandidates.filter(candidate => candidate.id != id);
    setSavedCandidates(filteredCandidates)
    localStorage.setItem("savedCandidates", JSON.stringify(filteredCandidates))
  }

  

  return (
    <div className="potential-candidates">
      <h1>Potential Candidates</h1>
      {
        savedCandidates.length > 0 ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>Bio</th>
                  <th>Reject</th>
                </tr>
              </thead>
              <tbody>
                {savedCandidates?.map((candidate, index) => (
                  <tr key={index}>
                    <td><img src={candidate.avatar_url} alt={candidate.name} /></td>
                    <td>{candidate.name}</td>
                    <td>{candidate.location}</td>
                    <td><Link to={`mailto:${candidate.email}`}> {candidate.email}</Link></td>
                    <td>{candidate.company}</td>
                    <td>{candidate.bio}</td>
                    <td>
                      <button onClick={() => handleRemoval(candidate.id)} className="btn btn-danger">
                        <FaMinus />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <p>No potential candidates found..</p>
          </div>
        )
      }
    </div>
  );
};

export default SavedCandidates;
