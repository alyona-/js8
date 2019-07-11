function getDegree(h, m) {
  return Math.abs((h + (m/60))*30-m*6);
}


console.log(getDegree(3,30));