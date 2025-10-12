

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiJarLabelBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M188,49.68V32a20,20,0,0,0-20-20H88A20,20,0,0,0,68,32V49.68A44.06,44.06,0,0,0,36,92V200a44.05,44.05,0,0,0,44,44h96a44.05,44.05,0,0,0,44-44V92A44.06,44.06,0,0,0,188,49.68ZM60,120H196v48H60ZM164,48H140V36h24ZM116,36V48H92V36ZM80,72h96a20,20,0,0,1,20,20v4H60V92A20,20,0,0,1,80,72Zm96,148H80a20,20,0,0,1-20-20v-8H196v8A20,20,0,0,1,176,220Z" />
        </G>
      </Svg>
    );
  }

