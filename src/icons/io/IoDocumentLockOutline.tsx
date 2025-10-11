

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoDocumentLockOutline = (props: IconProps) => {

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
          <Path  d="M288,304V286c0-16.63-14.26-30-32-30s-32,13.37-32,30v18" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Path  d="M304,416H208a32,32,0,0,1-32-32V336a32,32,0,0,1,32-32h96a32,32,0,0,1,32,32v48A32,32,0,0,1,304,416Z" />
          <Path  d="M416,221.25V416a48,48,0,0,1-48,48H144a48,48,0,0,1-48-48V96a48,48,0,0,1,48-48h98.75a32,32,0,0,1,22.62,9.37L406.63,198.63A32,32,0,0,1,416,221.25Z" fill="none" strokeLinejoin="round" strokeWidth="32" />
          <Path  d="M256,50.88V176a32,32,0,0,0,32,32H413.12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
        </G>
      </Svg>
    );
  }

