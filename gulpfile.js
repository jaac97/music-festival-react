
import gulp, {src, dest} from 'gulp';
import babel from 'gulp-babel';

function tarea (done) {
    console.log("Mi priemr tarea")
    done()
}

export{
    tarea
}