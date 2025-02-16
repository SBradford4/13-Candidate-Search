import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [currentCandidateId, setCurrentCandidateId] = useState(0);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [error, setError] = useState(false);


  async function fetchUserData() {
    const username = candidates[currentCandidateId]?.login;
    if (username) {
      const userData = await searchGithubUser(username);
      setCandidate(userData);
    }
  }

  async function fetchGithubUsers() {
    const githubUsers = await searchGithub();
    setCandidates(githubUsers)
  }

  const handlePlusCandidate = () => {
    if (currentCandidateId < candidates.length - 1) {
      setCurrentCandidateId(currentCandidateId + 1);
      handleSavedCandidates();
    } else {
      setError(true);
    }
  }

  const handleMinusCandidate = () => {
    if (currentCandidateId < candidates.length - 1) {
      setCurrentCandidateId(currentCandidateId + 1);
    } else {
      setError(true);
    }
  }

  const handleSavedCandidates = () => {
    setSavedCandidates((previousCandidates: Candidate[]) => {
      if (!candidate) return previousCandidates;
      return [...previousCandidates, candidate];
    });
  }
  

  useEffect(() => {
    fetchGithubUsers();
    const savedCandidatesFromLocal = localStorage.getItem("savedCandidates");
    if (savedCandidatesFromLocal) {
      setSavedCandidates(JSON.parse(savedCandidatesFromLocal))
    }
  }, []);

  useEffect(() => {
    fetchUserData()
  }, [candidates, currentCandidateId])

  useEffect(() => {
    localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));
  }, [savedCandidates])


  return (
    <div className='candidate-search'>
      <h1>Candidate Search</h1>
      {
        candidate && !error ? (
          <div className='candidate'>
            <div className='candidate-content'>
            <img src={candidate.avatar_url} alt={candidate.name} />
            <div className='user-data'>
              <h2>{candidate.name}({candidate.login})</h2>
              <p>Location: {candidate.location}</p>
              <p>Email: {candidate.email}</p>
              <p>Company: {candidate.company}</p>
              <p>Bio: {candidate.bio}</p>
            </div>
            </div>
            <div className='buttons'>
              <button onClick={handleMinusCandidate} className='btn-danger'>
                <FaMinus />
              </button>

              <button onClick={handlePlusCandidate} className='btn-primary'>
                <FaPlus />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p>No candidate data found</p>
          </div>
        )
      }

    </div>
  );
};

export default CandidateSearch;
