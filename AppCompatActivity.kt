class MainActivity : AppCompatActivity() {

    private lateinit var viewModel: MainViewModel

   

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_main)

       

        viewModel = ViewModelProvider(this)[MainViewModel::class.java]

        setupObservers()

    }

   

    private fun setupObservers() {

        viewModel.userData.observe(this) { user ->

            updateUI(user)

        }

    }

}
