package com.cmpe226;

public class Company {
	String CompanyName;
	String Website;
	String HeadQuarters;
	public Company(String comName, String website, String headQuart)
	{
		CompanyName = comName;
		Website = website;
		HeadQuarters = headQuart;
	}
	public String getCompanyName()
	{
		return CompanyName;
	}
	public void setCompanyName(String val)
	{
		CompanyName = val;
	}
	public String getWebsite()
	{
		return Website;
	}
	public void setWebsite(String val)
	{
		Website = val;
	}
	public String getHeadQuarters()
	{
		return HeadQuarters;
	}
	public void setHeadQuarters(String val)
	{
		HeadQuarters = val;
	}
}
