import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const UserChart = ({userLength}) => {
  const userLengthh = userLength
  return (
    <div className="userChart">
      <Bar
        data={{
          labels: ["User", "Admin"],
          datasets: [
            {
              label: ["Jumlah Akun"],
              data: [userLengthh, 1],
              backgroundColor: [
                "rgba(86, 154, 255, 0.5)",
                "rgba(86, 245, 255, 0.5)",
              ],
              borderColor: ["rgba(86, 154, 255, 1)", "rgba(86, 245, 255, 1)"],
              borderWidth: 2,
            },
          ],
        }}
        options={{
          color: "#fff",
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              position: "top",
              labels: {
                color: "#fff",
              },
            },
            // title: {
            //   display: true,
            // //   text: "Statistic User and Admin Account",
            // //   color: 'red'
            // },
          },
        }}
      />
    </div>
  );
};

export const BookChart = () => {
  return (
    <div className="bookChart">
      <Pie
        data={{
          labels: [
            "Fiksi",
            "Novel",
            "Pengembangan Diri",
            "Referensi",
            "Kesenian",
            "Bahasa",
            "Karya Umum",
            "Ilmu Pengetahuan Sosial",
            "Seni dan Desain",
            "Ilmu Terapan",
            "Agama",
            "Komputer dan Teknologi",
            "Kesusastraan",
            "Ilmu Pengetahuan Alam",
            "Olahraga",
            "Finansial",
            "Fiksi dan Sastra",
            "Ilmu Pasti",
            "Sejarah",
          ],
          datasets: [
            {
              // label:['Kategori Buku'],
              data: [
                12, 19, 3, 5, 2, 3, 5, 31, 14, 2, 8, 9, 11, 22, 13, 8, 12, 9,
                14,
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              position: "top",
              labels: {
                color: "#f0f0f0",
              },
            },
            title: {
              display: true,
              text: "Data Kategori Buku",
              color: "#f0f0f0",
            },
          },
        }}
      />
    </div>
  );
};

export const ShopChart = () => {
  return (
    <div className="shopChart">
      <Bar
        data={{
          labels: ["Bubur Kacang Ijo", "Ayam Pedas","Martabak Keju", "Nasi Padang","Pizza", "Piscok","Donat Madu", "Rendang","TopUp VALO", "Sepatu Lightspeed",],
          datasets: [
            {
              label: ["Harga (Dalam Ribuan)"],
              data: [7, 16, 25, 15, 10, 5, 25, 25, 23, 175],
              backgroundColor: [
                "rgba(10, 254, 155, 0.5)",
                "rgba(255, 20, 150, 0.5)",
                "rgba(86, 154, 255, 0.5)",
                "rgba(86, 20, 255, 0.5)",
                "rgba(86, 245, 255, 0.5)",
                "rgba(10, 254, 15, 0.5)",
                "rgba(255, 120, 150, 0.5)",
                "rgba(210, 14, 255, 0.5)",
                "rgba(121, 25, 25, 0.5)",
                "rgba(186, 65, 153, 0.5)",
              ],
              borderColor: [
                "rgba(10, 254, 155, 1)",
                "rgba(255, 20, 150, 1)",
                "rgba(86, 154, 255, 1)", 
                "rgba(86, 20, 255, 1)",
                "rgba(86, 245, 255, 1)",
                "rgba(10, 254, 15, 1)",
                "rgba(255, 120, 150, 1)",
                "rgba(210, 14, 255, 1)",
                "rgba(121, 25, 25, 1)",
                "rgba(186, 65, 153, 1)",
              ],
              borderWidth: 2,
            },
          ],
        }}
        options={{
          color: "#fff",
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              position: "top",
              labels: {
                color: "#fff",
              },
            },
            title: {
              display: true,
              text: "10 Random Shop Section Price",
              color: '#fff'
            },
          },
        }}
      />
    </div>
  );
};
