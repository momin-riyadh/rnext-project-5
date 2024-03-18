
export const getDateDifferenceFromNow = (fromDate) => {
    const currentDate = new Date();
    const givenDate = new Date(fromDate);

    const difference = currentDate.getTime() - givenDate.getTime();
    const diffDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((difference % (1000 * 60)) / 1000);

    const daysMessage = diffDays > 0 ? `${diffDays} day${diffDays > 1 ? 's' : ''} ` : '';
    const hoursMessage = diffHours > 0 ? `${diffHours} hour${diffHours > 1 ? 's' : ''} ` : '';
    const minutesMessage = diffMinutes > 0 ? `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ` : '';
    const secondsMessage = diffSeconds > 0 ? `${diffSeconds} second${diffSeconds > 1 ? 's' : ''}` : '';

    let message = `${daysMessage}${hoursMessage}${minutesMessage}`;

    if (!message) {
        message = 'Just now';
    }

    return `${message} ago`;
}
