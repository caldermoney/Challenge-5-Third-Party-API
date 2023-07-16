


$(function () {
  const currentDate = dayjs().format('dddd - MMM/D/YYYY - HH:mm');
  document.getElementById('currentDay').textContent = currentDate;

  const currentHour = dayjs().format('HH');

  const timeBlocks = $('.time-block');
  timeBlocks.each(function () {
    const hourElement = $(this);
    const hour = parseInt(hourElement.attr('id').split('-')[1]);

    if (hour < currentHour) {
      hourElement.addClass('past');
    } else if (hour == currentHour) {
      hourElement.addClass('present');
    } else {
      hourElement.addClass('future');
    }

    const textarea = hourElement.find('.description');
    const savedText = localStorage.getItem(hour.toString());

    if (savedText) {
      textarea.val(savedText);
    }
  });

  const saveButtons = $('.saveBtn');
  saveButtons.on('click', function () {
    const textarea = $(this).siblings('.description');
    const hour = textarea.parent().attr('id').split('-')[1];
    const text = textarea.val();

    localStorage.setItem(hour, text);
  })
});