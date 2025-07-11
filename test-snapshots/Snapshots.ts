export const Snapshots = {
  loginFormDefault:`
  - paragraph
  - text: "Username:"
  - textbox "Username:"
  - text: "Password:"
  - textbox "Password:"
  - button "Login"
  - paragraph: "In order to log in Orders sample use the following information:"
  - paragraph: Username - Tester Password - test
  `,
  homePageDefault: `
  - document:
    - table:
      - rowgroup:
        - row:
          - cell "Web Orders View all orders View all products Order":
            - heading "Web Orders" [level=1]
            - list:
              - listitem:
                - link "View all orders":
                  - /url: Default.aspx
              - listitem:
                - link "View all products":
                  - /url: Products.aspx
              - listitem:
                - link "Order":
                  - /url: Process.aspx
          - cell:
            - link "Logout":
              - /url: javascript:__doPostBack('ctl00$logout','')
            - heading "List of All Orders" [level=2]
            - paragraph:
              - link "Check All":
                - /url: javascript:__doPostBack('ctl00$MainContent$btnCheckAll','')
              - link "Uncheck All":
                - /url: javascript:__doPostBack('ctl00$MainContent$btnUncheckAll','')
            - table:
              - rowgroup:
                - 'row "Name Product # Date Street City State Zip Card Card Number Exp"':
                  - columnheader
                  - columnheader "Name"
                  - columnheader "Product"
                  - columnheader "#"
                  - columnheader "Date"
                  - columnheader "Street"
                  - columnheader "City"
                  - columnheader "State"
                  - columnheader "Zip"
                  - columnheader "Card"
                  - columnheader "Card Number"
                  - columnheader "Exp"
                  - columnheader
                - row /Paul Brown ScreenSaver 2 \\d+\\/\\d+\\/\\d+ 5, Ringer Street Las Vegas, NV US \\d+ MasterCard \\d+ \\d+\\/\\d+ Edit/:
                  - cell:
                    - checkbox
                  - cell "Paul Brown"
                  - cell "ScreenSaver"
                  - cell "2"
                  - cell /\\d+\\/\\d+\\/\\d+/
                  - cell "5, Ringer Street"
                  - cell "Las Vegas, NV"
                  - cell "US"
                  - cell /\\d+/
                  - cell "MasterCard"
                  - cell /\\d+/
                  - cell /\\d+\\/\\d+/
                  - cell "Edit":
                    - button "Edit"
                - row /Mark Smith FamilyAlbum 1 \\d+\\/\\d+\\/\\d+ 9, Maple Valley Whitestone, British Canada \\d+ VISA \\d+ \\d+\\/\\d+ Edit/:
                  - cell:
                    - checkbox
                  - cell "Mark Smith"
                  - cell "FamilyAlbum"
                  - cell "1"
                  - cell /\\d+\\/\\d+\\/\\d+/
                  - cell "9, Maple Valley"
                  - cell "Whitestone, British"
                  - cell "Canada"
                  - cell /\\d+/
                  - cell "VISA"
                  - cell /\\d+/
                  - cell /\\d+\\/\\d+/
                  - cell "Edit":
                    - button "Edit"
                - row /Steve Johns ScreenSaver 1 \\d+\\/\\d+\\/\\d+ \\d+, Park Avenue Salmon Island Canada \\d+ MasterCard \\d+ \\d+\\/\\d+ Edit/:
                  - cell:
                    - checkbox
                  - cell "Steve Johns"
                  - cell "ScreenSaver"
                  - cell "1"
                  - cell /\\d+\\/\\d+\\/\\d+/
                  - cell /\\d+, Park Avenue/
                  - cell "Salmon Island"
                  - cell "Canada"
                  - cell /\\d+/
                  - cell "MasterCard"
                  - cell /\\d+/
                  - cell /\\d+\\/\\d+/
                  - cell "Edit":
                    - button "Edit"
                - row /Charles Dodgeson MyMoney 1 \\d+\\/\\d+\\/\\d+ \\d+, Stone st\\. Bringtone, TX US \\d+ American Express \\d+ \\d+\\/\\d+ Edit/:
                  - cell:
                    - checkbox
                  - cell "Charles Dodgeson"
                  - cell "MyMoney"
                  - cell "1"
                  - cell /\\d+\\/\\d+\\/\\d+/
                  - cell /\\d+, Stone st\\./
                  - cell "Bringtone, TX"
                  - cell "US"
                  - cell /\\d+/
                  - cell "American Express"
                  - cell /\\d+/
                  - cell /\\d+\\/\\d+/
                  - cell "Edit":
                    - button "Edit"
                - row /Susan McLaren MyMoney 1 \\d+\\/\\d+\\/\\d+ 7, Flower Street Earlcastle Great Britain \\d+ MasterCard \\d+ \\d+\\/\\d+ Edit/:
                  - cell:
                    - checkbox
                  - cell "Susan McLaren"
                  - cell "MyMoney"
                  - cell "1"
                  - cell /\\d+\\/\\d+\\/\\d+/
                  - cell "7, Flower Street"
                  - cell "Earlcastle"
                  - cell "Great Britain"
                  - cell /\\d+/
                  - cell "MasterCard"
                  - cell /\\d+/
                  - cell /\\d+\\/\\d+/
                  - cell "Edit":
                    - button "Edit"
                - row /Bob Feather FamilyAlbum 1 \\d+\\/\\d+\\/\\d+ \\d+, North av\\. Milltown, WI US \\d+ VISA \\d+ \\d+\\/\\d+ Edit/:
                  - cell:
                    - checkbox
                  - cell "Bob Feather"
                  - cell "FamilyAlbum"
                  - cell "1"
                  - cell /\\d+\\/\\d+\\/\\d+/
                  - cell /\\d+, North av\\./
                  - cell "Milltown, WI"
                  - cell "US"
                  - cell /\\d+/
                  - cell "VISA"
                  - cell /\\d+/
                  - cell /\\d+\\/\\d+/
                  - cell "Edit":
                    - button "Edit"
                - row /Samuel Clemens MyMoney 2 \\d+\\/\\d+\\/\\d+ 3, Garden st\\. Hillsberry, UT US \\d+ MasterCard \\d+ \\d+\\/\\d+ Edit/:
                  - cell:
                    - checkbox
                  - cell "Samuel Clemens"
                  - cell "MyMoney"
                  - cell "2"
                  - cell /\\d+\\/\\d+\\/\\d+/
                  - cell "3, Garden st."
                  - cell "Hillsberry, UT"
                  - cell "US"
                  - cell /\\d+/
                  - cell "MasterCard"
                  - cell /\\d+/
                  - cell /\\d+\\/\\d+/
                  - cell "Edit":
                    - button "Edit"
                - row /Clare Jefferson FamilyAlbum 2 \\d+\\/\\d+\\/\\d+ \\d+, Owk Street Greentown, CA US \\d+ MasterCard \\d+ \\d+\\/\\d+ Edit/:
                  - cell:
                    - checkbox
                  - cell "Clare Jefferson"
                  - cell "FamilyAlbum"
                  - cell "2"
                  - cell /\\d+\\/\\d+\\/\\d+/
                  - cell /\\d+, Owk Street/
                  - cell "Greentown, CA"
                  - cell "US"
                  - cell /\\d+/
                  - cell "MasterCard"
                  - cell /\\d+/
                  - cell /\\d+\\/\\d+/
                  - cell "Edit":
                    - button "Edit"
            - button "Delete Selected"
  `,
  homePageAllOrdersDeleted: `
    - heading "List of All Orders" [level=2]
    - text: List of orders is empty. In order to add new order use
    - link "this link":
      - /url: Process.aspx
    - text: .
    - paragraph
    `
};