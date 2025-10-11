

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCameraReverseOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M350.54,148.68l-26.62-42.06C318.31,100.08,310.62,96,302,96H210c-8.62,0-16.31,4.08-21.92,10.62l-26.62,42.06C155.85,155.23,148.62,160,140,160H80a32,32,0,0,0-32,32V384a32,32,0,0,0,32,32H432a32,32,0,0,0,32-32V192a32,32,0,0,0-32-32H373C364.35,160,356.15,155.23,350.54,148.68Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M335.76,285.22V271.91a80,80,0,0,0-131-61.6M176,258.78v13.31a80,80,0,0,0,130.73,61.8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

