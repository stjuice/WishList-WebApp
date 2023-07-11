# WishList-WebApp

WishList is an application that allows you to manage and share your wishes, as well as create and store wish lists. With WishList, you can easily organize your desires, track your progress, and share your wish lists with others.

# Tech Stack

Server:
- c# .NET 7.0
- HotCHocolate 13.0.5
- HotChocolate.AspNetCore
- Microsoft.AspNetCore.SpaServices.Extensions 7.0.5
- Newtonsoft.Json 13.0.3

Client:
- TypeScript
- React, Redux, RxJs
- jwt-decode

Data managment:
Json file

To configure the data storage for your local environment, follow these steps:

1. Create a folder for the local data storage. For example, create a folder named @data at the root of your application.
2. Open the appsettings.json file and locate the DataPath section.
3. Configure the file paths for each entity in the DataPath section. Here's an example configuration:
