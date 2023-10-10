 // Get the initials from the name
 export const getInitialName = (fullName) => {
    const nameParts = fullName.split(' ');
    if (nameParts.length === 1) {
      // Only the first name is provided
      return nameParts[0].charAt(0);
    } else if (nameParts.length >= 2) {
      // Both first and last names are provided
      const firstInitial = nameParts[0].charAt(0);
      const lastInitial = nameParts[nameParts.length - 1].charAt(0);
      return `${firstInitial}${lastInitial}`;
    }
    return ''; // Default if no name is provided
  };


 export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };