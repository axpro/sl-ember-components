import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'span',

    classNames: [ 'sl-pagination-controls' ],

    actions: {
        changePage: function( page ){
            page = page ? page : this.get( 'currentPageInput' );
            this.sendAction( 'action', page );
        }
    },

    currentPageInput: Ember.computed.oneWay( 'currentPage' ),

    currentPageInputDisabled: Ember.computed.alias( 'disabled' ),

    firstLinkDisabled: function(){
        return this.get( 'disabled' ) || this.get( 'currentPage' ) === 1;
    }.property( 'currentPage', 'disabled' ),

    prevLinkDisabled: Ember.computed.alias( 'firstLinkDisabled' ),

    nextLinkDisabled: function(){
        return this.get( 'disabled' ) || this.get( 'currentPage' ) === this.get( 'totalPages' );
    }.property( 'currentPage', 'totalPages', 'disabled' ),

    lastLinkDisabled: Ember.computed.alias( 'nextLinkDisabled' )
});