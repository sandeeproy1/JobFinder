package com.cmpe226;

import java.io.File;
import java.sql.*;
import java.util.ArrayList;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathFactory;

import org.w3c.dom.*;

public class MainClass {
	// JDBC driver name and database URL
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql://localhost/EMP";

	// Database credentials
	static final String USER = "root";
	static final String PASS = "";

	public static boolean IsFound(ArrayList<Company> company, String coName) {
		try {
			for (Company co : company) {
				//System.out.println(coName+"=="+co.CompanyName);
				if (new String(co.getCompanyName().trim()).equals(coName.trim())) {
					return true;
				}
			}
			return false;
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
			return false;
		}
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Connection conn = null;
		try {
			ArrayList companyList = new ArrayList<Company>();
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/findajob", "root", "");
			Statement stmt = conn.createStatement();

			ResultSet rs = stmt.executeQuery("select * from company");
			while (rs.next()) {
				String companyName = rs.getString("CompanyName");
				String website = rs.getString("Website");
				String headQuarters = rs.getString("HeadQuarters");
				Company newCompany = new Company(companyName, website, headQuarters);
				companyList.add(newCompany);
				// System.out.println(companyName);
			}
			// System.out.println(jaxbObjectToXML(companyList));

			File fXmlFile = new File("input.xml");
			DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
			DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
			Document doc = dBuilder.parse(fXmlFile);
			NodeList nList = doc.getElementsByTagName("Company");
			XPathFactory factory = XPathFactory.newInstance();
			XPath xpath = factory.newXPath();
			for (int temp = 0; temp < nList.getLength(); temp++) {
				Node nNode = nList.item(temp);
				Node coName = (Node) xpath.evaluate("./CompanyName", nNode, XPathConstants.NODE);
				Node webNode = (Node) xpath.evaluate("./Website", nNode, XPathConstants.NODE);
				Node hqNode = (Node) xpath.evaluate("./HeadQuarters", nNode, XPathConstants.NODE);
				// nNode.getChildNodes()
				if (IsFound(companyList, coName.getFirstChild().getNodeValue()) == false) {
					System.out.println(coName.getFirstChild().getNodeValue());

					System.out.println(webNode.getFirstChild().getNodeValue());
					System.out.println(hqNode.getFirstChild().getNodeValue());
					
					// Add to database
					String query = "INSERT INTO `company`(`CompanyName`, `Website`, `HeadQuarters`) VALUES ('"
							+ coName.getFirstChild().getNodeValue() + "','" + webNode.getFirstChild().getNodeValue() + "','"
							+ hqNode.getFirstChild().getNodeValue() + "')";
					System.out.println(query);
					stmt.executeUpdate(query);
				}
			}
			conn.close();
			// Do something with the Connection

		} catch (SQLException ex) {
			// handle any errors
			System.out.println("SQLException: " + ex.getMessage());
			System.out.println("SQLState: " + ex.getSQLState());
			System.out.println("VendorError: " + ex.getErrorCode());
		} catch (Exception ex) {
			System.out.println("Error: " + ex.getMessage());
		}
	}

}
