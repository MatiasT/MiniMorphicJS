class VerticalView extends Morph {
	constructor() {
		super();
		this.separator = 5;
		this.expandsHeight = false;
		this.adjustsWidth=false;
		this.requiredHeight=0;
		this.requiredWidth=0;
		this.color = "black";
		this.on("step", function (now) {
			if(this.expandsHeight && this.owner)
			{
				this.height=this.owner.height;
			}
			let sep = this.separator;
			let current = this.top + sep;
			let l = this.left + sep;
			let maxW = 0;
			this.submorphsDo((sm) => {
					sm.top = current;
					sm.left = l;
					if (sm.width > maxW) {
						maxW = sm.width;
					}
					current += sm.height + sep;
				});
			this.requiredHeight=current;
			let desiredWidth = maxW + (2 * sep);
			this.requiredWidth=desiredWidth;
			if(this.adjustsWidth){
				this.width = (this.owner)? (this.owner.width<desiredWidth)?this.owner.width:desiredWidth :desiredWidth;
			}
		});

	}

}
 