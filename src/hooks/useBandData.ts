import { useState, useEffect } from 'react';
import { getBandMembers, getBandInfo } from '../services/api';

export const useBandData = () => {
  const [members, setMembers] = useState([]);
  const [bandInfo, setBandInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [membersData, infoData] = await Promise.all([
          getBandMembers(),
          getBandInfo()
        ]);
        setMembers(membersData);
        setBandInfo(infoData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { members, bandInfo, loading, error };
};