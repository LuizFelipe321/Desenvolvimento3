const courses = [
    'Curso de JavaScript',
    'Curso de Python',
    'Curso de HTML e CSS',
    'Curso de React',
    'Curso de Desenvolvimento Web',
    'Curso de Banco de Dados',
    'Curso de Design Gráfico',
    'Curso de Inteligência Artificial',
    'Curso de Machine Learning'
  ];
  
  function showSuggestions() {
    const input = document.getElementById("searchInput");
    const query = input.value.toLowerCase();
    const suggestionsDiv = document.getElementById("suggestions");
  
    suggestionsDiv.innerHTML = '';
  
    if (query.length > 0) {
      const filteredCourses = courses.filter(course => course.toLowerCase().includes(query));
      
      if (filteredCourses.length > 0) {
        suggestionsDiv.style.display = 'block';
        filteredCourses.forEach(course => {
          const div = document.createElement("div");
          div.textContent = course;
          div.onclick = function() {
            input.value = course; 
            suggestionsDiv.innerHTML = ''; 
            suggestionsDiv.style.display = 'none';
          };
          suggestionsDiv.appendChild(div);
        });
      } else {
        suggestionsDiv.style.display = 'none'; 
      }
    } else {
      suggestionsDiv.style.display = 'none'; 
    }
  }
  
  function searchCourses() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
  
    const filteredCourses = courses.filter(course => course.toLowerCase().includes(query));

    resultsDiv.innerHTML = ''; 
  
    if (filteredCourses.length > 0) {
      filteredCourses.forEach(course => {
        const div = document.createElement("div");
        div.textContent = course;
        resultsDiv.appendChild(div);
      });
    } else {
      resultsDiv.innerHTML = 'Nenhum curso encontrado.';
    }
  }
