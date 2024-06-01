function calculateScore() {
  // Rebuild Houses
  const houseRed = parseInt(document.getElementById('houseType1').value);
  const houseBlue = parseInt(document.getElementById('houseType2').value);
  const houseYellow = parseInt(document.getElementById('houseType3').value);
  const houseGreen = parseInt(document.getElementById('houseType4').value);
  const additionalPoints1 = parseInt(document.getElementById('additionalPoints1').value);
  const additionalPoints2 = parseInt(document.getElementById('additionalPoints2').value);
  const additionalPoints3 = parseInt(document.getElementById('additionalPoints3').value);
  const additionalPoints4 = parseInt(document.getElementById('additionalPoints4').value);

  // Count the number of houses with exactly 4 floors and matching color
  let additionalHouses1 = 0, additionalHouses2 = 0, additionalHouses3 = 0, additionalHouses4 = 0;
  if (houseRed === 14) additionalHouses1++;
  if (houseBlue === 14) additionalHouses2++;
  if (houseYellow === 14) additionalHouses3++;
  if (houseGreen === 14) additionalHouses4++;

  // Calculate the total additional points for each house
  const totalAdditionalPoints1 = additionalHouses1 * additionalPoints1;
  const totalAdditionalPoints2 = additionalHouses2 * additionalPoints2;
  const totalAdditionalPoints3 = additionalHouses3 * additionalPoints3;
  const totalAdditionalPoints4 = additionalHouses4 * additionalPoints4;

  // Calculate house scores
  const houseScores = [houseRed, houseBlue, houseYellow, houseGreen];
  let houseScore = houseScores.reduce((sum, score) => sum + score, 0);

  // Clear Debris
  const clearDebris = parseInt(document.getElementById('clearDebris').value);
  const clearDebris2 = parseInt(document.getElementById('clearDebris2').value);
  const clearDebris3 = parseInt(document.getElementById('clearDebris3').value);
  const clearDebris4 = parseInt(document.getElementById('clearDebris4').value);

  // Water Pipes
  const waterPipes = parseInt(document.getElementById('waterPipes').value);
  const waterPipes2 = parseInt(document.getElementById('waterPipes2').value);

  // Bonus for Barriers
  const barriers1 = parseInt(document.getElementById('barriers').value);
  const barriers2 = parseInt(document.getElementById('barriers2').value);
  const barriers3 = parseInt(document.getElementById('barriers3').value);

  // Calculate total score
  const totalScore = houseScore + clearDebris + clearDebris2+ clearDebris3 + clearDebris4 + waterPipes + waterPipes2 + barriers1 + barriers2 + barriers3 + totalAdditionalPoints1 + totalAdditionalPoints2 + totalAdditionalPoints3 + totalAdditionalPoints4;

  // Set a maximum score cap if total score exceeds the maximum allowed
  const maxScore = 145;
  const finalScore = totalScore > maxScore ? maxScore : totalScore;

  document.getElementById('totalScore').textContent = finalScore;
  // Assuming a function or mechanism to calculate time in full seconds is in place
  // document.getElementById('timeInSeconds').textContent = calculateTimeInSeconds();
}
