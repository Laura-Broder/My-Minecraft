# create game

## 1. create landing page

### start game

start button - link? button?

### advance options

## 2. create world layout

HTML - containers:

```
<body>
    <div class="main">
      <div class="world">

      </div>
      <div class="sideToolBar">
        <div class="tools">

        </div>
        <div class="inventory">

        </div>
      </div>
    </div>
  </body>
```

fill the containers:

- game world

  1. sky tiles
  2. cloud tiles
  3. tree trunk tiles
  4. leaves tiles
  5. rock tiles
  6. dirt tiles

- side toolbar
  - tools
    1. Axe - for cutting trees
    2. Pickaxe - for mining rocks
    3. Shovel - for digging dirt
  - inventory

## 3. create the world

- create a grid x rows y cols
- create x\*y divs

  - each div in a grid in a (row,col) place
  - each div has data attributes:
    ```
    <div
      data-row:"i"
      data-row:"j"
      data-type:"
        0. sky tiles
        1. cloud tiles
        2. tree trunk tiles
        3. leaves tiles
        4. rock tiles
        5. dirt tiles
      ">
    ```

- how to create the original world?
  - basic: only sky[0] and dirt[5]
    - loop top of world add data type sky
    - loop bottom of world add data type dirt
