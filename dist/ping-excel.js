/**
 * @version 1.0.0-RELEASE
 * @time 2018-12-21
 * @author Ping
 * @phone 13639101200
 * @email 13639101200@163.com
 */
var pingExcel = {
	defaults : {
		settings : {
			width : '100%',
			height : '100%',
			border : 'none',
			rowSize : 30,
			columnSize : 15,
			cellWidth : '72px',
			cellHeight : '18px',
			cellBorder : '1px solid #d4d4d4',
			columnTitle : [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ],
		}
	},
	init : function(elemId, settings) {
		// 隐藏页面元素
		var elem = $('#' + elemId);
		elem.css('display', 'none');
		// 获取配置信息
		settings = settings || this.defaults.settings;

		// 获取电子表格信息
		settings.width = settings.width || this.defaults.settings.width;
		settings.height = settings.height || this.defaults.settings.height;
		settings.border = settings.border || this.defaults.settings.border;
		// 创建电子表格元素
		var excel = $('<div></div>');
		elem.after(excel);
		excel.css('width', settings.width);
		excel.css('height', settings.height);
		excel.css('border', settings.border);
		excel.css('overflow', 'auto'); // 滚动条自动显示

		// 获取表格信息
		settings.rowSize = settings.rowSize || this.defaults.settings.rowSize;
		settings.columnSize = settings.columnSize || this.defaults.settings.columnSize;
		settings.cellWidth = settings.cellWidth || this.defaults.settings.cellWidth;
		settings.cellHeight = settings.cellHeight || this.defaults.settings.cellHeight;
		settings.cellBorder = settings.cellBorder || this.defaults.settings.cellBorder;
		settings.columnTitle = settings.columnTitle || this.defaults.settings.columnTitle;
		// 创建表格元素
		var columnTable = $('<div></div>');
		excel.append(columnTable);
		columnTable.css('display', 'table');
		columnTable.css('border-collapse', 'collapse'); // 合并边框
		var columnRow = $('<div></div>');
		columnTable.append(columnRow);
		columnRow.css('display', 'table-row');
		var columnCell = $('<div></div>');
		columnRow.append(columnCell);
		columnCell.css('display', 'table-cell');
		columnCell.css('font-size', '12px');
		columnCell.css('vertical-align', 'middle');
		var columnDiv = $('<div></div>');
		columnCell.append(columnDiv);
		columnDiv.css('width', '24px');
		columnDiv.css('height', settings.cellHeight);
		columnDiv.css('padding', '0 2px');

		var rowTable = $('<div></div>');
		excel.append(rowTable);
		rowTable.css('display', 'inline-table');
		rowTable.css('border-collapse', 'collapse'); // 合并边框

		var table = $('<div></div>');
		excel.append(table);
		table.css('display', 'inline-table');
		table.css('border-collapse', 'collapse'); // 合并边框
		for (var i = 0; i < settings.rowSize; i++) {

			var rowRow = $('<div></div>');
			rowTable.append(rowRow);
			rowRow.css('display', 'table-row');
			var rowCell = $('<div></div>');
			rowRow.append(rowCell);
			rowCell.css('display', 'table-cell');
			rowCell.css('border-top', settings.cellBorder);
			rowCell.css('border-bottom', settings.cellBorder);
			rowCell.css('font-size', '12px');
			rowCell.css('vertical-align', 'middle');
			var rowDiv = $('<div></div>');
			rowCell.append(rowDiv);
			rowDiv.css('width', '24px');
			rowDiv.css('height', settings.cellHeight);
			rowDiv.css('padding', '0 2px');
			rowDiv.css('text-align', 'center');
			rowDiv.html(i);

			var row = $('<div></div>');
			table.append(row);
			row.css('display', 'table-row');
			for (var j = 0; j < settings.columnSize; j++) {
				if (i == 0) {
					var columnCell = $('<div></div>');
					columnRow.append(columnCell);
					columnCell.css('display', 'table-cell');
					columnCell.css('border-left', settings.cellBorder);
					columnCell.css('border-right', settings.cellBorder);
					columnCell.css('font-size', '12px');
					columnCell.css('vertical-align', 'middle');
					var columnDiv = $('<div></div>');
					columnCell.append(columnDiv);
					columnDiv.css('width', settings.cellWidth);
					columnDiv.css('height', settings.cellHeight);
					columnDiv.css('padding', '0 2px');
					columnDiv.css('text-align', 'center');
					columnDiv.html(settings.columnTitle[j]);
				}

				var cell = $('<div></div>');
				row.append(cell);
				cell.css('display', 'table-cell');
				cell.css('border', settings.cellBorder);
				cell.css('font-size', '12px');
				cell.css('vertical-align', 'middle');

				var div = $('<div></div>');
				cell.append(div);
				div.css('width', settings.cellWidth);
				div.css('height', settings.cellHeight);
				div.css('padding', '0 2px');
				div.html(j);

				var input = $('<input/>');
				cell.append(input);
				input.css('display', 'none');
				input.css('border', 'none');
				input.css('width', settings.cellWidth);
				input.css('height', settings.cellHeight);
				input.css('padding', '0 2px');
			}
		}

	}
};