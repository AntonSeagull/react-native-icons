

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPersonSimpleCircleBold = (props: IconProps) => {

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
          <Path  d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM108,80a20,20,0,1,1,20,20A20,20,0,0,1,108,80Zm76,40a12,12,0,0,1-12,12H140v.51l26.12,41.05a12,12,0,0,1-3.68,16.56A11.83,11.83,0,0,1,156,192a12,12,0,0,1-10.13-5.56L128,158.35l-17.88,28.09a12,12,0,0,1-20.24-12.88L116,132.51V132H84a12,12,0,0,1,0-24h88A12,12,0,0,1,184,120Z" />
        </G>
      </Svg>
    );
  }

