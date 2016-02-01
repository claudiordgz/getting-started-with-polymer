The Alpha Web Style

The main library selected to build the Front End is Polymer, 
right now we have SCSS in the `package.json` file but that will
be phased out in favor of encapsulated Web Components. All styling
included in here will be core style and will only include global
handling behavior. 

All core dependencies (build) are handled by `npm` and all front
end dependencies will be handled by `bower`, all dependencies will 
be distributed in the `assets/vendor` directory. 
