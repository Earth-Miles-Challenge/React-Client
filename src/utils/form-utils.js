export const getOptionDetails = option => {
	if (Array.isArray(option)) {
		return option.length === 2 ? option : [ option[0], option[0] ];
	} else {
		return [option, option]
	}
}

export const getIdFromLabel = label => label.toLowerCase().replace(/ /g, '-');