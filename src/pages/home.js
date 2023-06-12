/* Import Layout */
import Link from "next/link";
import "../app/globals.css";
import MainLayout from '../components/layouts/main.js';

const Home = () => {
    return (
        <main className="bg-no-repeat">
            <MainLayout>
                <div>
                    <h1 className="  text-center mt-16 font-semibold tracking-wide text-3xl font-sans	">Welcome</h1>
                    <div>
                        <div>
                            <p className="text-center mt-32 break-words tracking-wide text-xl">
                                Please take a moment to peruse my portfolio of skills and insights
                                through<br /> my collection of informative and thought-provoking blog posts
                            </p>
                        </div>
                        <div>
                            <p className="text-center mt-32 tracking-wide text-xl">
                                Delve deeper into my expertise and learn about my unique approach to<br />
                                Development and how I can bring value to your business or project.
                            </p>
                        </div>
                        <div className="text-center mt-8 cursor pointer text-blue-600 text-xl">
                            <a href="#"> ← Explore now </a>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </main>
    );
}
export default Home;