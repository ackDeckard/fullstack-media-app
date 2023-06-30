import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid h-screen place-items-center bg-backgroundColor">
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-buttonLoginColor hover:bg-slate-400 text-sm normal-case",
            card: "bg-bgSignInOutNavBarColor text-white",
            headerTitle: "text-white text-3xl",
            headerSubtitle: "hidden",
            socialButtonsBlockButton: "text-white",
            socialButtonsBlockButton__github: "",
            providerIcon__github: "bg-white rounded-full",
            footerActionText: "text-white",
            formFieldRow__emailAddress: "text-white",
          },
        }}
      />
    </div>
  );
}
