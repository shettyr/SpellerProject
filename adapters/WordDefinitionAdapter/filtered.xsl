<!--
    IBM Confidential OCO Source Materials
 
    5725-G92 Copyright IBM Corp. 2006, 2012

    The source code for this program is not published or otherwise
    divested of its trade secrets, irrespective of what has
    been deposited with the U.S. Copyright Office.
    //*[@id="MainTxt"]/table[1]/tbody/tr/td/div[1]/div[1]/text()
-->

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:h="http://www.w3.org/1999/xhtml">
    <xsl:output method="text"/>
    
    <xsl:template match="/">
        {
        	'sound': '<xsl:value-of select="./entry_list/entry[position() = 1]/sound/wav"/>',
	        'fl': [
		        <xsl:for-each select="./entry_list/entry[position() = 1]/fl">
	               '<xsl:value-of select="."/>' <xsl:if test="not(position()=last())">,</xsl:if>
		        </xsl:for-each>
	        ],       
	        'date': '<xsl:value-of select="./entry_list/entry[position() = 1]/def/date"/>',
	        'definition': [
		        <xsl:for-each select="./entry_list/entry[position() = 1]/def/dt">
		                '<xsl:value-of select="."/>' <xsl:if test="not(position()=last())">,</xsl:if>
		        </xsl:for-each>	 	
		        <xsl:value-of select="string('')"/>
	        ],       
	        'word': '<xsl:value-of select="./entry_list/entry[position() = 1]/ew"/>' 
        }
    </xsl:template>
    

</xsl:stylesheet>
