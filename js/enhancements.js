// Show quotes
quotes = [
  '"The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela"',
  '"The way to get started is to quit talking and begin doing. -Walt Disney"',
  "\"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs\"",
  '"If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt"',
  "\"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey\"",
  "\"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron\"",
  '"Life is what happens when you\'re busy making other plans. -John Lennon"',
];

var quoteButton = document.getElementById("quote-button");
var quoteText = document.getElementById("quote-text");

quoteButton.onclick = function (e) {
  quoteText.innerText = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.style.visibility = "visible";
}.bind(this);

var sendMailButton = document.getElementById("send-mail");
var form = document.querySelector("form");
var formMsg = document.getElementById("email-form-msg");

// Handle email service thorugh emailjs
sendMailButton.onclick = function (e) {
  const data = Object.fromEntries(new FormData(form).entries());

  var templateParams = {
    from_name: data.name,
    from_email: data.email,
    message: data.message,
    subject: "Message from personal website",
  };

  if (
    !templateParams.from_name ||
    !templateParams.from_email ||
    !templateParams.message
  ) {
    formMsg.style.visibility = "visible";
    formMsg.style.color = "orange";
  } else {
    formMsg.style.visibility = "hidden";

    emailjs.send("service_860u9oy", "template_we0k2nv", templateParams).then(
      function (response) {
        window.alert("SUCCESS! Message sent.");
      },
      function (error) {
        window.alert("FAILED! Please try again later");
      }
    );
  }
}.bind(this);
