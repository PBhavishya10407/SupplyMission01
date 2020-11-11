class PackageBody
{
    constructer()
    {
        var options=
        {
            restitution : 0.9
        }
        this.body=bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
    }
}