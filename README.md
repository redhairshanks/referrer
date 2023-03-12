# README

## Tech stack used
* Ruby on Rails, Mysql, Redis
* Hosted on AWS EC2 (ubuntu ami)

## Features supported
* User can register
* User can login
* User can refer other users
* User can see all users they have referred

## Technical Considerations
* Did not use Devise Gem, created own custom registration and login mechanism using redis
* Used Javascript and Bootstrap5 for frontend as I am not proficient in React
* Used redis to store sessions which expire after 3 hours
* Also used redis to store the shareable link id which expires after 7 days
* Currently hosted on AWS with both postgres and redis on single EC2 machine to complexity
* Have put in controller level and database level validations wherever necessary

## Did not attempt
* MUI and React based frontend

## Database Design

* Users table
  * id (auto incr), email, name, password_digest
* UserReferences table
  * id, user_id (foreign_key), email, active, timestamps
  
