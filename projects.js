
const projects_data = [
    {
        name: 'Amazon Clone',
        description: 'I\'ve used HTML5, css3 and some simple javascript to build an amazon clone, the user can add products to the cart and the total bill will be displayed in the cart section of the webpage.',
        img: 'amazon.png',
        bd_color: 'rgb(128, 116, 28)',
        link: 'https://tvnlcharan.github.io/amazon-tvnl/amazon-home'
    },
    {
        name: 'YouTube Clone',
        description: 'I\'ve used HTML5, css3 and tried to build YouTube Home Page clone, I\' added some default videos to the home page and added some resources to learn <code>web development.</code>',
        img: 'youtube.jpg',
        bd_color: 'rgb(156,33,33)',
        link: 'https://tvnlcharan.github.io/youtube-tvnl/YouTube',
    },
    {
        name: 'Fashion MNist using Deep Learning',
        description: 'Fashion Mnist is the first dataset I\'ve worked on to build a Convolutional Neural Networks<code>(CNN)</code>, It is a great start for anyone who is looking to work in the field of computer vision',
        img: 'fashion_mnist.webp',
        bd_color: 'purple',
        link: 'https://colab.research.google.com/drive/1hr7hfWGkCVaRps0UoX8UNb4Tt0xo6stJ'
    },
    {
        name: 'Tic Tac Toe',
        description: 'Tic Tac Toe is a popular two player game, I built this using basic html, css and javascript, the players can reset the game once it is over.',
        img: 'tic-tac-toe.jpg',
        bd_color: 'green',
        link: 'https://tvnlcharan.github.io/tic-tac-toe-tvnl/tic-tac-toe'
    },
    {
        name: 'Rock Paper Scissors',
        description: 'I\'ve used HTML5, css3 and some simple javascript to build a simple rock paper scissors game, the <code>Player</code> can reset the score when needed, the progess of the game will be saved.',
        img: 'rock-paper-scissors.png',
        bd_color: 'blue',
        link: 'https://tvnlcharan.github.io/rock-paper-scissors-tvnl/rock_paper_scissors'
    },
    {
        name: 'Bull Dozer Price Prediction using ML',
        description: 'This is my beginner <code>Machine Learning</code> project that i worked on initially, I\'ve downloaded the dataset from kaggle and built my machine learning model using <code>RandomForestRegressor.</code>',
        img: 'bull_dozer_price_prediction.png',
        bd_color: 'teal',
        link: 'https://github.com/TVNLCHARAN/bulldozer-price-regression'
    },
    
]

let projects = '';

projects_data.forEach((project)=>{
    projects += `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-8">
    <div class="card" style="width: 14rem;background-color: black;color: white;border: 1px solid ${project.bd_color};box-shadow: 1px 1px 10px ${project.bd_color};">
        <img src="${project.img}" class="card-img-top" alt="project-img">
        <div class="card-body">
        <h5 class="card-title"><code>${project.name}</code></h5>
        <p class="card-text">${project.description}</p>
        <a href="${project.link}" target="_blank" class="btn btn-primary" style="color: white;font-weight: bold;font-size: 16px;background-color:${project.bd_color}; border: 1px solid ${project.bd_color}">Visit <code>${project.name}</code></a>
        </div>
    </div>
</div>`
});

if(projects){
    document.querySelector('.projects-div').innerHTML = projects;
}
