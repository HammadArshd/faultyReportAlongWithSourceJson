overview-features.html produced has garbage data in it.

Report included, Source JSON included in this repo.

POM Used for this:

'''

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.0</version>
                <configuration>
                    <source>${java.version}</source>
                    <target>${java.version}</target>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>2.22.0</version>
                <configuration>
                    <testFailureIgnore>true</testFailureIgnore>
                    <forkCount>3</forkCount>
                    <reuseForks>true</reuseForks>
                    <includes>
                        <!--<include>**/*CukesTest.java</include>-->
                        <include>${include.runners}</include>
                    </includes>
                    <systemPropertyVariables>
                        <screenshotDirectory>${project.build.directory}/screenshots</screenshotDirectory>
                    </systemPropertyVariables>
                </configuration>
            </plugin>

            <plugin>
                <groupId>com.github.temyers</groupId>
                <artifactId>cucumber-jvm-parallel-plugin</artifactId>
                <version>5.0.0</version>
                <executions>
                    <execution>
                        <id>generateRunners</id>
                        <phase>generate-test-sources</phase>
                        <goals>
                            <goal>generateRunners</goal>
                        </goals>
                        <configuration>
                            <!-- Mandatory -->
                            <!-- comma separated list of package names to scan for glue code -->
                            <!-- These are optional, with the default values -->
                            <!-- Where to output the generated tests -->
                            <outputDirectory>${project.build.directory}/generated-test-sources/cucumber
                            </outputDirectory>
                            <!-- The directory, which must be in the root of the runtime classpath, containing your feature files.  -->
                            <featuresDirectory>src/test/resources</featuresDirectory>
                            <!-- Directory where the cucumber report files shall be written  -->
                            <cucumberOutputDir>${cucumberOutputDirectory}</cucumberOutputDir>
                            <!-- List of cucumber plugins. When none are provided the json formatter is used. For more
                                 advanced usage see section about configuring cucumber plugins -->
                            <plugins>
                                <plugin>
                                    <!--The available options are junit, testng, html, pretty, json, usage and rerun -->
                                    <name>json</name>
                                </plugin>
                                <plugin>
                                    <!--The available options are junit, testng, html, pretty, json, usage and rerun -->
                                    <name>html</name>
                                </plugin>
                                <plugin>
                                    <name>pretty</name>
                                </plugin>
                            </plugins>
                            <!-- CucumberOptions.strict property -->
                            <strict>true</strict>
                            <!-- CucumberOptions.monochrome property -->
                            <monochrome>false</monochrome>
                            <!--The tags to run, maps to CucumberOptions.tags property-->
                            <!--<tags>"@all"</tags>-->
                            <tags>
                                <tag>@all</tag>
                                <!--Currently multiple tags not working-->
                                <!--<tag>@cheese</tag>-->
                                <!--<tag>@milk</tag>-->
                            </tags>
                            <!-- Generate TestNG runners instead of JUnit ones. -->
                            <useTestNG>true</useTestNG>
                            <!-- The naming scheme to use for the generated test classes.  One of 'simple' or 'feature-title' -->
                            <namingScheme>simple</namingScheme>
                            <!-- The class naming pattern to use.  Only required/used if naming scheme is 'pattern'.-->
                            <namingPattern>Parallel{c}IT</namingPattern>
                            <!-- One of [SCENARIO, FEATURE]. SCENARIO generates one runner per scenario.  FEATURE generates a runner per feature. -->
                            <parallelScheme>SCENARIO</parallelScheme>
                            <!-- Specify a custom template for the generated sources (this is a path relative to the project base directory) -->
                            <customVmTemplate>src/test/resources/custom-runner-template.java.vm
                            </customVmTemplate>
                            <!-- Specify a custom package name for generated sources. Default is no package.-->
                            <!--<packageName></packageName>-->
                        </configuration>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <groupId>net.masterthought</groupId>
                <artifactId>maven-cucumber-reporting</artifactId>
                <version>3.20.0</version>
                <executions>
                    <execution>
                        <id>execution</id>
                        <phase>verify</phase>
                        <goals>
                            <goal>generate</goal>
                        </goals>
                        <configuration>
                            <projectName>cucumber-jvm-example</projectName>
                            <!-- output directory for the generated report -->
                            <outputDirectory>${project.build.directory}</outputDirectory>
                            <!-- optional, defaults to outputDirectory if not specified -->
                            <!--<inputDirectory>${project.build.directory}/jsonReports</inputDirectory>-->
                            <inputDirectory>${cucumberOutputDirectory}</inputDirectory>
                            <jsonFiles>
                                <!-- supports wildcard or name pattern -->
                                <param>**/*.json</param>
                            </jsonFiles>
                            <!-- optional, defaults to outputDirectory if not specified -->
                            <!--<classificationDirectory>${project.build.directory}/classifications</classificationDirectory>-->
                            <!--<classificationFiles>-->
                                <!--&lt;!&ndash; supports wildcard or name pattern &ndash;&gt;-->
                                <!--<param>sample.properties</param>-->
                                <!--<param>other.properties</param>-->
                            <!--</classificationFiles>-->
                            <parallelTesting>true</parallelTesting>
                        </configuration>
                        <!--<configuration>-->
                            <!--<projectName>${project.name}</projectName>-->
                            <!--&lt;!&ndash; output directory for the generated report &ndash;&gt;-->
                            <!--<outputDirectory>${project.build.directory}/site/cucumber-reports</outputDirectory>-->
                            <!--<cucumberOutput>${cucumberOutputDirectory}</cucumberOutput>-->

                            <!--&lt;!&ndash;shows additional column in report - 'Device'&ndash;&gt;-->
                            <!--<parallelTesting>true</parallelTesting>-->
                        <!--</configuration>-->
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
    '''

    
