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
* I had pre-used AWS smtp credentials which I have used for emails

## Did not attempt
* MUI and React based frontend

## Database Design

* Users table
  * id (auto incr), email, name, password_digest
* UserReferences table
  * id, user_id (foreign_key), email, active, timestamps
  
Images 
* Sign-up
<img width="1918" alt="Screenshot 2023-03-13 at 1 46 55 AM" src="https://user-images.githubusercontent.com/46422962/224571231-86074f02-3ca5-4c64-85f1-138e0da3ccc6.png">



* Login
<img width="1920" alt="Screenshot 2023-03-13 at 1 46 41 AM" src="https://user-images.githubusercontent.com/46422962/224571238-b4386652-b780-4b70-a716-ce7413d4d968.png">


* JS validations
<img width="1917" alt="Screenshot 2023-03-13 at 1 47 11 AM" src="https://user-images.githubusercontent.com/46422962/224571218-8a460ff8-95ec-4a35-a010-ebf786006cdc.png">



* All References
<img width="1918" alt="Screenshot 2023-03-13 at 1 47 22 AM" src="https://user-images.githubusercontent.com/46422962/224571204-d8bcccb7-769b-4fda-9ab5-a72cc8db5333.png">


* Add new reference
<img width="1918" alt="Screenshot 2023-03-13 at 1 47 34 AM" src="https://user-images.githubusercontent.com/46422962/224571197-eb984394-9fe0-4b08-aa08-34380f63660f.png">


* Email (I had aws smtp credentials from before and used them, please ignore!)
<img width="1528" alt="Screenshot 2023-03-13 at 1 48 27 AM" src="https://user-images.githubusercontent.com/46422962/224571186-7a7b0004-f1d0-4ae0-9852-ff570aae422a.png">
