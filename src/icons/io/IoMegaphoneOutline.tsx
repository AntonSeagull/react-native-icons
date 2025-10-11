

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoMegaphoneOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M407.94,52.22S321.3,160,240,160H80a16,16,0,0,0-16,16v96a16,16,0,0,0,16,16H240c81.3,0,167.94,108.23,167.94,108.23,6.06,8,24.06,2.52,24.06-9.83V62C432,49.69,415,43.18,407.94,52.22Z" />
          <Path d="M64,256s-16-6-16-32,16-32,16-32" />
          <Path d="M448,246s16-4.33,16-22-16-22-16-22" />
          <Path d="M144,288V456a8,8,0,0,0,8,8h53a16,16,0,0,0,15.29-20.73C211.91,416.39,192,386.08,192,336h16a16,16,0,0,0,16-16V304a16,16,0,0,0-16-16H192" />
        </G>
      </Svg>
    );
  }

