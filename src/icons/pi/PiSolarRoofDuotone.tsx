

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSolarRoofDuotone = (props: IconProps) => {

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
          <Path  d="M240,128H96L56,48H200Z" opacity="0.2" />
          <Path  d="M247.16,124.42l-40-80A8,8,0,0,0,200,40H56a8,8,0,0,0-7.16,4.42l-40,80A8.08,8.08,0,0,0,8,128v56a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V128A8.08,8.08,0,0,0,247.16,124.42ZM99.06,56l12,24H80.94l-12-24Zm48,0,12,24H128.94l-12-24Zm-46.12,64-12-24h30.12l12,24Zm48,0-12-24h30.12l12,24Zm48,0-12-24h30.12l12,24Zm10.12-40H176.94l-12-24h30.12ZM24,129.89l32-64,32,64V184H24ZM104,184V136H232v48Z" />
        </G>
      </Svg>
    );
  }

