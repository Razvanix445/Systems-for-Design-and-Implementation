using System;
using System.Diagnostics.Eventing.Reader;
using System.Windows.Forms;
using ProiectRezervariCurse.domain;
using ProiectRezervariCurse.repository.database;
using ProiectRezervariCurse.repository.interfaces;
using ProiectRezervariCurse.service;

namespace ProiectRezervariCurse
{
    public partial class LoginForm : Form
    {
        private static readonly IReservationManagerRepository reservationManagerRepository = new ReservationManagerDBRepository();
        private static readonly IReservationRepository reservationRepository = new ReservationDBRepository();
        private static readonly ITripRepository tripRepository = new TripDBRepository();
        private static readonly Service service = new Service(reservationManagerRepository, reservationRepository, tripRepository);
        
        public LoginForm()
        {
            InitializeComponent();
        }

        private void LoginButton_Click(object sender, EventArgs e)
        {
            string username = UsernameTextBox.Text;
            string password = PasswordTextBox.Text;
            ReservationManager loggedUser = service.FindReservationManagerByName(username);
            
            if (loggedUser != null && loggedUser.Password == password)
            {
                try
                {
                    Form1 form1 = new Form1();
                    form1.SetService(service);
                    form1.Show();
                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.Message);
                }
            }
            else
            {
                MessageBox.Show("Invalid username or password");
            }
        }
        
        private void ExitButton_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}