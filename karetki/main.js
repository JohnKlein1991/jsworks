var selectedArea;

function getSelectionText() {
	var x = '';
	if (x = window.getSelection) {
		if (selectedArea){
			var previousSelected = document.querySelector('.selected-before');
			previousSelected.remove();
			var previousSelected = document.querySelector('.selected-after');
			previousSelected.remove();
			selectedArea = false;
		}
		if(!getSelection().isCollapsed){
			var obj = {};
			obj = getSelection().getRangeAt(0).cloneRange();
			var span = document.createElement('span');
			span.classList.add('selected-before');
			obj.insertNode(span); 
			obj.collapse(false);
			var span = document.createElement('span');
			span.classList.add('selected-after');
			obj.insertNode(span);
			
			
			selectedArea = true;
		}
	} else {alert('This is IE!')}

}

document.onmouseup = getSelectionText;