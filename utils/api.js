const fetchQuizData = async () => {
  try {
    let url=`https://opentdb.com/api.php`
    let totalQuestion=15
    const response = await fetch(`${url}?amount=${totalQuestion}`);
    if (!response.ok) {
      throw new Error('Failed to fetch quiz data');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    alert('Error fetching quiz data: Check with admin or your connection', error.message);
    throw error;
  }
};

export { fetchQuizData };
