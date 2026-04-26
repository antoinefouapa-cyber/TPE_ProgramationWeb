 document.getElementById('birthdate').max = new Date().toISOString().split('T')[0];

 function calculerAge() {
     const inputDate = document.getElementById('aniv').value;
     const errorDiv = document.getElementById('erreur');
     const resultDiv = document.getElementById('resultat');

     errorDiv.style.display = 'none';
     resultDiv.classList.remove('vue');

     if (!inputDate) {
         errorDiv.style.display = 'block';
         return;
     }

     const birthDate = new Date(inputDate);
     const today = new Date();

     if (birthDate > today) {
         errorDiv.textContent = "La date ne peut pas être dans le futur";
         errorDiv.style.display = 'block';
         return;
     }

     let years = today.getFullYear() - birthDate.getFullYear();
     let months = today.getMonth() - birthDate.getMonth();
     let days = today.getDate() - birthDate.getDate();

     // Ajustement si le jour n'est pas encore passé ce mois-ci
     if (days < 0) {
         months--;
         // Nombre de jours dans le mois précédent
         const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
         days += lastMonth.getDate();
     }

     // Ajustement si le mois n'est pas encore passé cette année
     if (months < 0) {
         years--;
         months += 12;
     }

     document.getElementById('annee').textContent = years;
     document.getElementById('mois').textContent = months;
     document.getElementById('jours').textContent = days;

     resultDiv.classList.add('vue');
 }

 // Permet de calculer avec Enter
 document.getElementById('aniv').addEventListener('keypress', function(e) {
     if (e.key === 'Enter') {
         calculerAge();
     }
 });